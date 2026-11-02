/**
 * QuizLab -> Google Sheets
 *
 * Spreadsheet columns:
 * A: Nama Peserta
 * B: Waktu Submit
 * C: Nilai Akhir
 *
 * Cara penggunaan:
 * 1. Buat Google Spreadsheet.
 * 2. Buka Extensions > Apps Script dari spreadsheet tersebut.
 * 3. Ganti isi Code.gs dengan kode ini.
 * 4. Jika script dibuat dari spreadsheet (bound script), biarkan SPREADSHEET_ID kosong.
 * 5. Deploy > New deployment > Web app.
 *    Execute as: Me
 *    Who has access: Anyone
 * 6. Salin URL Web App yang berakhiran /exec ke googleAppsScriptUrl
 *    di file js/questions.js.
 */

const SPREADSHEET_ID = ''; // Isi jika project Apps Script dibuat secara standalone.
const SHEET_NAME = 'Hasil QuizLab';

/**
 * Jalankan sekali dari editor Apps Script saat script dibuat dari
 * Extensions > Apps Script di spreadsheet tujuan.
 */
function setupQuizLab() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) {
    throw new Error('Buka Apps Script dari Extensions > Apps Script pada spreadsheet tujuan, atau isi SPREADSHEET_ID.');
  }

  PropertiesService.getScriptProperties().setProperty('SPREADSHEET_ID', spreadsheet.getId());
  getOrCreateSheet_(spreadsheet);
  SpreadsheetApp.flush();

  return 'QuizLab terhubung ke: ' + spreadsheet.getName();
}

function doGet() {
  return jsonResponse_({
    success: true,
    message: 'QuizLab result endpoint is ready.'
  });
}

function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(10000);

    const params = (e && e.parameter) ? e.parameter : {};
    const name = String(params.name || '').trim();
    const score = Number(params.score);

    if (!name) {
      return jsonResponse_({ success: false, message: 'Nama peserta wajib diisi.' });
    }

    if (!Number.isFinite(score) || score < 0 || score > 100) {
      return jsonResponse_({ success: false, message: 'Nilai akhir tidak valid.' });
    }

    const spreadsheet = getSpreadsheet_();
    const sheet = getOrCreateSheet_(spreadsheet);

    sheet.appendRow([name, new Date(), Math.round(score)]);

    const lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 2).setNumberFormat('dd/MM/yyyy HH:mm:ss');
    sheet.getRange(lastRow, 3).setNumberFormat('0');

    return jsonResponse_({
      success: true,
      message: 'Hasil ujian berhasil disimpan.'
    });
  } catch (error) {
    console.error(error);
    return jsonResponse_({
      success: false,
      message: String(error && error.message ? error.message : error)
    });
  } finally {
    if (lock.hasLock()) {
      lock.releaseLock();
    }
  }
}

function getSpreadsheet_() {
  const savedId = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  const spreadsheetId = savedId || SPREADSHEET_ID;

  if (!spreadsheetId) {
    throw new Error('Spreadsheet belum dikonfigurasi. Jalankan setupQuizLab() sekali dari editor atau isi SPREADSHEET_ID.');
  }

  return SpreadsheetApp.openById(spreadsheetId);
}

function getOrCreateSheet_(spreadsheet) {
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, 3).setValues([[
      'Nama Peserta',
      'Waktu Submit',
      'Nilai Akhir'
    ]]);

    sheet.getRange(1, 1, 1, 3)
      .setFontWeight('bold')
      .setBackground('#dbeafe')
      .setFontColor('#1e3a5f');

    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 240);
    sheet.setColumnWidth(2, 180);
    sheet.setColumnWidth(3, 120);
  }

  return sheet;
}

function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
