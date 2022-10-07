import Table from "../../components/Table";
import React, {useEffect, useState} from "react";
import {instance} from "../../services/api";

function MemberList() {
    const [memberList, setMemberList] = useState([]);

    // 상태의 변화가 생겼을 때 실행
    useEffect(() => {
        instance
            .post("/networking/vpc/getVpcList", {})
            .then((response) => {
                console.log(response);
                setMemberList(response.data["vpcList"]);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])  // useEffect 의 두 번째 인자 : 의존성 배열. 이 배열 안에 들어간 인자에 변화가 생겼을 때 useEffect 함수가 실행됨.


    return (
        <div>
            <h1>MemberList</h1>
            {/*<Table*/}
            {/*    headerName="Member"*/}
            {/*    dataList={memberList}*/}
            {/*/>*/}
        </div>
    )
}

export default MemberList;