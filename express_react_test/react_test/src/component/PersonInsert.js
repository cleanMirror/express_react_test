import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function PersonInsert() {

    const navigate = useNavigate();

    var name   = useRef();
    var gender = useRef();
    var phone  = useRef();
    var addr   = useRef(); 

    async function fnSave() {
        try {
            const res = await axios.post("http://localhost:3100/person", {
                name   : name.current.value,
                gender : gender.current.value,
                phone  : phone.current.value,
                addr   : addr.current.value
            });
            if (res.data.success) {
                navigate("/person");
            } else {
                alert("등록실패");
            }
        } catch (err) {
            console.error("등록실패", err);
        }
    }

    return (
        <div>
            <table>
                <tr>
                    <th>이름</th>
                    <td>
                        <input ref={ name }></input>
                    </td>
                </tr>
                <tr>
                    <th>성별</th>
                    <td>
                        <input ref={ gender }></input>
                    </td>
                </tr>
                <tr>
                    <th>전화번호</th>
                    <td>
                        <input ref={ phone }></input>
                    </td>
                </tr>
                <tr>
                    <th>주소</th>
                    <td>
                        <input ref={ addr }></input>
                    </td>
                </tr>
            </table>
            <button onClick={ fnSave }>저장</button>
        </div>
    );
}

export default PersonInsert;