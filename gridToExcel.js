 /// 전역변수
 // Get today's date
 const today = new Date();
 // Format the date as "yyyy.MM.dd"
 const formattedDate = `${today.getFullYear()}.${(today.getMonth() + 1).toString().padStart(2, '0')}.${today.getDate().toString().padStart(2, '0')}`;

 const hourwage = 10702;
 const insurance = 4790;

 var grid;
 var loadedData = [];

  window.onload = function() {

    // 로드되지마자 보여줄 데이터
  $.ajax({
    url: "saved-data.js",
    method: "GET",
    success: function(result) {
      grid.resetData(eval(result));
    }
  });
    
    grid = new tui.Grid({
      el: document.getElementById('makeExcel'),
      // data: gridData,
      scrollX: false,
      scrollY: false,
      rowHeaders: ["rowNum"],
      columns: [
        {
          header: '이름',
          name: 'name',
          editor: 'text'
        },
        {
          header: '생년월일',
          name: 'birth',
          editor: {
            type: 'datePicker',
            options: {
              format: 'yyyy.MM.dd'
            }
          } 
        },
        {
          header: '근무시간(hr)',
          name: 'worktime',
          editor: 'text'
        },
        {
          header: '은행',
          name: 'bank',
          editor: {
            type: 'select',
            options: {
              listItems: [
                {
                  text: '선택 안함',
                  value: '-'
                },
                {
                  text: 'KB국민',
                  value: 'KB국민'
                },
                {
                  text: '신한',
                  value: '신한'
                },
                {
                  text: '토스뱅크',
                  value: '토스뱅크'
                },
                {
                  text: '카카오뱅크',
                  value: '카카오뱅크'
                },
                {
                  text: '우리',
                  value: '우리'
                },
                {
                  text: '하나',
                  value: '하나'
                },
                {
                  text: 'NH농협',
                  value: 'NH농협'
                },
                {
                  text: 'IBK기업',
                  value: 'IBK기업'
                },
                {
                  text: '우체국',
                  value: '우체국'
                },
                {
                  text: '새마을',
                  value: '새마을'
                },
                {
                  text: '수협',
                  value: '수협'
                },
                {
                  text: '케이뱅크',
                  value: '케이뱅크'
                },
                {
                  text: 'SC제일',
                  value: 'SC제일'
                },
                {
                  text: '부산',
                  value: '부산'
                },
                {
                  text: '신협',
                  value: '신협'
                },
                {
                  text: '경남',
                  value: '경남'
                },
                {
                  text: '대구',
                  value: '대구'
                },
                {
                  text: '광주',
                  value: '광주'
                },
                {
                  text: '전북',
                  value: '전북'
                },
                {
                  text: '제주',
                  value: '제주'
                },
                {
                  text: '씨티',
                  value: '씨티'
                },
                {
                  text: 'SBI저축은행',
                  value: 'SBI저축은행'
                },
                {
                  text: 'HSBC',
                  value: 'HSBC'
                },
                {
                  text: 'JP모건',
                  value: 'JP모건'
                },
                {
                  text: '저축은행',
                  value: '저축은행'
                },
                {
                  text: 'KDB산업',
                  value: 'KDB산업'
                },
                {
                  text: 'BOA',
                  value: 'BOA'
                },
                {
                  text: '중국공상',
                  value: '중국공상'
                },
                {
                  text: 'BNP파리바',
                  value: 'BNP파리바'
                },
                {
                  text: '산림조합',
                  value: '산림조합'
                },
                {
                  text: '중국',
                  value: '중국'
                },
                {
                  text: '도이치',
                  value: '도이치'
                },
                {
                  text: '중국건설',
                  value: '중국건설'
                },
                
              ]
            }
          }
        },
        {
          header: '계좌번호',
          name: 'account',
          editor: {
            type: 'text'
          } 
        },
        
      ],
      draggable: true
    });


    /// 버튼 실행
    // 초기화
    $('#loadInitialButton').click(function(){
      $.ajax({
        url: "saved-data.js",
        method: "GET",
        success: function(result) {
          grid.resetData(eval(result));
        }
      })
    })
    // 데이터불러오기
    $('#loadDataButton').click(function() {
      // Check if there is any data in the loadedData array
      if (loadedData.length > 0) {
        // Reset the grid with the loadedData array
        grid.resetData(loadedData);
      } else {
        alert('불러올 데이터가 없습니다.');
      }
    });

    // 행추가
    $('#addRowButton').click(function() {
      // Create a new empty row object
      var newRow = {
        name: '',
        birth: '',
        bank: '',
        account: '',
      };

      // Add the new row to the grid's data
      grid.appendRow(newRow);
    });

    // 데이터 체크
    // $('#checkData').click(function() {
    //   console.log('savedData : ',savedData);
    // });

    // 데이터 저장
    $('#saveDataButton').click(function() {
      // Get the data from the grid
      const gridData = grid.getData();

      // Save the grid data to both savedData and loadedData arrays
      savedData = gridData;
      loadedData = gridData;

      // Log the updated savedData array (optional)
      console.log('savedData : ',savedData);

      // You can also choose to do other actions here, such as displaying a success message.
      // For example:
      alert('현재 입력된 데이터가 저장되었습니다.');
    });


    // 행 삭제
    $('#deleteDataButton').click(function() {

      // 삭제하기 전에 기존 데이터를 저장해야됨.
      const gridData = grid.getData();
      savedData = gridData;

      // Check if there is any data in the savedData array
      if (savedData.length > 0) {
        // Remove the last object from the savedData array
        savedData.pop();

        // You can also choose to do other actions here, such as updating the grid with the modified data.
        // For example, if you want to update the grid, you can use the following line:
        grid.resetData(savedData);
      } else {
        alert('삭제할 데이터가 없습니다.');
      }
    });

    // 엑셀로 저장
    $('#saveToExcelButton').click(function() {
    // Get the data from the grid
    const gridData = grid.getData();

    const titleData = [
      [`마포소금나루도서관  단시간  근로자  임금지급 조서 (${formattedDate})`],
      [],
      [`(근무기간 : ${formattedDate.substring(0, 4)}. ${formattedDate.substring(5, 7)}. 01. ~ ${formattedDate.substring(0, 4)}. ${formattedDate.substring(5, 7)}. ${formattedDate.substring(8, 10)}.)`],
    ];

    // Convert the data to an array of arrays for xlsx-populate
    const excelData = [
      ['연번','이름', '생년월일', '은행명', '계좌번호','임금총액','시간급','근무시간','공제합계','공제내역','실지급액(F)','비고'],
      ['','', '', '', '','A = B X C','(B)','(C)','(D)','고용보험','F = A - D',''],
      ['합계']
    ];
    let rowNum = 1;
    gridData.forEach(row => {
      const worktimeNumeric = parseFloat(row.worktime); // worktime은 문자데이터이므로 엑셀에서 제대로 처리하기 위해 숫자데이터로 변경해주기.
      excelData.push([rowNum++, row.name, row.birth, row.bank, row.account, '', '', worktimeNumeric]); 
    });

    excelData.push(
      [`* ${formattedDate.substring(0, 4)}년 마포구 생활임금 시급 : ${hourwage}원`],
      ['','','','','','','','','',`${formattedDate.substring(0, 4)}. ${formattedDate.substring(5, 7)}.`],
      ['','','','','','','','','작성자 : 지방사서주사보      O O O (인)'],
      ['','','','','','','','','확인자 : 마포중앙도서관장   O O O (인)']
    )

    // Create an empty workbook
    const workbook = XlsxPopulate.fromBlankAsync();

    // Create a new worksheet and populate the data
    workbook.then(workbookInstance => {
      // Create a new sheet and set its name to 'Sheet Name'
      const sheet = workbookInstance.addSheet('급여내역');
      
      /// 특정셀에 값 넣기
      sheet.cell('A1').value(titleData); // 해당 셀부터 excelData에 저장된 데이터 붙여넣기!
      sheet.cell('A4').value(excelData); 
      sheet.cell('G6').value("-");
      sheet.cell('L6').value("＊지방회계법 55조-원단위 절사");
      // 시급입력
      var startCell = `G7`;
      var endCell = `G${rowNum-1 + 6}`;
      sheet.range(startCell + ':' + endCell).value(hourwage); 
      // 고용보험 입력
      var startCell = `I7`;
      var endCell = `I${rowNum-1 + 6}`;
      sheet.range(startCell + ':' + endCell).value(insurance); 
      // 공제합계입력
      var startCell = `J7`;
      var endCell = `J${rowNum-1 + 6}`;
      sheet.range(startCell + ':' + endCell).value(insurance); 

      /// 엑셀함수입력
      // 임금총액(A) 
      var startingRow = 7; 
      for (let i = 0; i < gridData.length; i++) {
        const rowNumber = startingRow + i;
        const formulaCell = sheet.cell('F' + rowNumber);
        const cellFormula = '=G' + rowNumber + '*'+'H' + rowNumber;
        formulaCell.formula(cellFormula);
      }
      // 실지급액(F) 
      var startingRow = 7; 
      for (let i = 0; i < gridData.length; i++) {
        const rowNumber = startingRow + i;
        const formulaCell = sheet.cell('K' + rowNumber);
        const cellFormula = '=F' + rowNumber + '-'+'I' + rowNumber;
        formulaCell.formula(cellFormula);
      }
      // 합계
      var seletCell = `F${rowNum-1 + 6}`;
      var cellFormula = `=SUM(F7:${seletCell})`;       
      sheet.cell("F6").formula(cellFormula);

      var seletCell = `H${rowNum-1 + 6}`;
      var cellFormula = `=SUM(H7:${seletCell})`;       
      sheet.cell("H6").formula(cellFormula);

      var seletCell = `I${rowNum-1 + 6}`;
      var cellFormula = `=SUM(I7:${seletCell})`;       
      sheet.cell("I6").formula(cellFormula);

      var seletCell = `J${rowNum-1 + 6}`;
      var cellFormula = `=SUM(J7:${seletCell})`;       
      sheet.cell("J6").formula(cellFormula);

      var seletCell = `K${rowNum-1 + 6}`;
      var cellFormula = `=SUM(K7:${seletCell})`;       
      sheet.cell("K6").formula(cellFormula);


      /// 엑셀 스타일 작업
      // 셀 색칠
      sheet.range("A4:L5").style('fill', 'FFCC99'); // #FFCC99:주황

      var startCell = `F6`;
      var endCell = `F${rowNum-1 + 6}`;
      sheet.range(startCell + ':' + endCell).style('fill', 'CCFFCC'); // #CCFFCC:연두

      sheet.range("G6:H6").style('fill', 'CCFFCC'); // #CCFFCC:연두

      var startCell = `I6`;
      var endCell = `I${rowNum-1 + 6}`;
      sheet.range(startCell + ':' + endCell).style('fill', 'FFFFCC'); // #FFFFCC:연노랑

      sheet.cell('J6').style('fill', 'FFFFCC'); // #FFFFCC:연노랑

      var startCell = `K6`;
      var endCell = `K${rowNum-1 + 6}`;
      sheet.range(startCell + ':' + endCell).style('fill', 'FF99CC'); // #FF99CC:연분홍

      // 셀 크기 조절
      sheet.row(1).height(30);
      sheet.column('C').width(12);
      sheet.column('E').width(18);
      sheet.column('F').width(10);
      sheet.column('K').width(10);
      sheet.column('L').width(21);
      // 셀 병합 후 가운데 정렬
      sheet.range("A6:E6").merged(true)
      sheet.range("A1:L1").merged(true)
      sheet.range("A4:A5").merged(true)
      sheet.range("B4:B5").merged(true)
      sheet.range("C4:C5").merged(true)
      sheet.range("D4:D5").merged(true)
      sheet.range("E4:E5").merged(true)
      sheet.range("L4:L5").merged(true)

      //가운데 정렬
      sheet.cell('A1').style({horizontalAlignment: "center", verticalAlignment: "center", });

      var startCell = `A4`;
      var endCell = `L${rowNum-1 + 6}`;
      sheet.range(startCell + ':' + endCell).style({horizontalAlignment: "center", verticalAlignment: "center", });

      // 폰트 스타일
      sheet.cell('A1').style("fontSize", 20);
      sheet.cell('L6').style("fontSize", 8);
      sheet.range("A1:L5").style("bold", true);

      var startCell = `I${rowNum-1 + 8}`;
      var endCell = `J${rowNum-1 + 10}`;
      sheet.range(startCell + ':' + endCell).style("fontSize", 14).style("fontFamily", "궁서").style("bold", true)
      
      sheet.range("A6:K6").style('fontColor', '0000FF').style("bold", true); // #0000FF:파랑
      
      // 표 테두리
      sheet.range("A4:L6").style("border", true)

      var startCell = `A7`;
      var endCell = `L${rowNum-1 + 6}`;
      sheet.range(startCell + ':' + endCell).style("border", true);

      // 데이터형식
      var startCell = `F6`;
      var endCell = `G${rowNum-1 + 6}`;
      sheet.range(startCell + ':' + endCell).style("numberFormat", `#,##0`)

      var startCell = `I6`;
      var endCell = `K${rowNum-1 + 6}`;
      sheet.range(startCell + ':' + endCell).style("numberFormat", `#,##0`)

      var startCell = `H7`;
      var endCell = `H${rowNum-1 + 6}`;
      sheet.range(startCell + ':' + endCell).style("numberFormat", "0")



      /// 저장에 관한 코드
      // Delete the original 'Sheet1'
      workbookInstance.deleteSheet('Sheet1');
      // Convert the workbook to a buffer
      return workbookInstance.outputAsync();
    })
    .then(buffer => {
      // Create a Blob from the buffer
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = '마포소금나루도서관  단시간  근로자  임금지급 조서.xlsx';
      a.click();
      // Clean up
      window.URL.revokeObjectURL(url);
      alert('엑셀로 저장했습니다. 엑셀파일을 열고 편집사용(E)을 누르세요.');      
    })
    .catch(err => {
      console.error('Error exporting to Excel:', err);
      alert('데이터를 저장하는 중에 오류가 발생했습니다.');
    });
  });
  } // 함수끝 ! 

  // tui.grid 스타일 테마 
  tui.Grid.applyTheme('normal',{
    cell: {
      normal: {
        background: "#fff",
        border: "#e0e0e0",
        showVerticalBorder: true,
        showHorizontalBorder: true,
      },
      header: {
        background: "#f0fbff",
        border: "#e0e0e0",
        showHorizontalBorder: true,
      },
      rowHeader: {
        background: "#f0fbff",
        border: "#e0e0e0",
        showHorizontalBorder: true,
      },
    }
  })