const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');

// import fs from 'fs';
// import {path} from 'path';
// import dayjs from 'dayjs';


// 시작 날짜 설정
let startDate = dayjs('2025-01-06'); // 첫 주의 월요일
const totalWeeks = 31; // 총 주차

// 폴더 생성 기준 설정
const createFolders = (start, weeks) => {
  for (let i = 1; i <= weeks; i += 2) {
    const week1Start = start.format('YY.MM.DD');
    const week1End = start.add(4, 'day').format('YY.MM.DD');

    const week2Start = start.add(7, 'day').format('YY.MM.DD');
    const week2End = start.add(11, 'day').format('YY.MM.DD');

    const folderName = `${i}${i + 1}주차(${week1Start}~${week2End})`;
    const folderPath = path.join(__dirname, folderName);

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
      console.log(`Created folder: ${folderName}`);
    }

    start = start.add(14, 'day'); // 다음 2주로 이동
  }
};

// 폴더 생성 실행
createFolders(startDate, totalWeeks);
