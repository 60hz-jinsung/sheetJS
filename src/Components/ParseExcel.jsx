import React, { useState } from "react";

import {read ,utils, readFile} from 'xlsx'

function ParseExcel() {

    const [fileName, setFileName] = useState(null);
    const [columns, setColumns] = useState([])

    const handleFile = async (e) => {
        const file = e.target.files[0];
        setFileName(file.name)
        const data = await file.arrayBuffer()

        // 모든 엑셀 파일 읽기
        const workbook = read(data)

        // 원하는 엑셀 인덱스 구간 읽기
        // const workbook = readFile(data, {sheetRows: 5})

        const worksheet = workbook.Sheets[workbook.SheetNames[0]];

         // 
         const jsonData = utils.sheet_to_json(worksheet);

        // 엑셀 columns 별 분류하기
        // const jsonData = utils.sheet_to_json(worksheet, {
        //     header: 1,
        //     defval: "",
        // });

        setColumns(jsonData[0])

        console.log(jsonData)
    }

    return( 
        <div>
            <h1>ParseExcel</h1>
            {fileName && (
                <>
                    <p>
                        FileName: <span>{fileName}</span>
                    </p>
                    {/* <p>
                        Columns: {" "} <select>{columns.map((el,idx) => (<option key={idx}value={el}>{el}</option>))}</select>
                    </p> */}
                </>
            )}
            <input type="file" onChange={(e) => handleFile(e)}/>
        </div>
    )
}

export default ParseExcel