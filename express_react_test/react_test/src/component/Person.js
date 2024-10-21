import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Person() {

    const navigate = useNavigate();

    var [ persons, setPersons ] = useState([]);

    async function getPersonInfo() {
        const res = await axios.get("http://localhost:3100/person");
        setPersons(res.data.list);
    }

    async function fnModify(id, prevGender) {
        const res = await axios.put("http://localhost:3100/person", {id, prevGender});
        getPersonInfo();
    }

    async function fnDelete(id) {
        const res = await axios.delete("http://localhost:3100/person", {data : {id : id}});
        getPersonInfo();
    }

    useEffect(() => {
        getPersonInfo();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>아이디</th>
                        <th>이름</th>
                        <th>성별</th>
                        <th>전화번호</th>
                        <th>주소</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map((item) => {
                        return (
                            <tr>
                                <td>{ item.id     }</td>
                                <td>{ item.name   }</td>
                                <td>{ item.gender }</td>
                                <td>{ item.phone  }</td>
                                <td>{ item.addr   }</td>
                                <td>
                                    <button onClick={()=>{
                                        fnModify(item.id, item.gender);
                                    }}>수정</button>
                                </td>
                                <td>
                                    <button onClick={() => {
                                        fnDelete(item.id);
                                    }}>삭제</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button onClick={() => {
                navigate("/person/insert");
            }}>추가</button>
        </div>
    );
}

export default Person;