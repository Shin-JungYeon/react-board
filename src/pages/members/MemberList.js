import List from "../../components/List";
import React, {useEffect, useRef, useState} from "react";
import {instance} from "../../services/api";

function MemberList() {
    const [memberList, setMemberList] = useState([]);
    const columns = ["name", "email", "phone"];
    const dataList = [
        {
        name: "신정연",
        email: "jy.shin@okestro.com",
        phone: "010-4021-2153"
        },
        {
        name: "최두영",
        email: "dy.choi@okestro.com",
        phone: "010-4021-2153"
        },
        {
        name: "신채연",
        email: "cy.shine@okestro.com",
        phone: "010-4021-2153"
        },
    ]

    // 상태의 변화가 생겼을 때 실행
    useEffect(() => {
        // instance
        //     .post("/networking/vpc/getVpcList", {})
        //     .then((response) => {
        //         console.log(response);
        //         setMemberList(response.data["vpcList"]);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     })
    }, [memberList])  // useEffect 의 두 번째 인자 : 의존성 배열. 이 배열 안에 들어간 인자에 변화가 생겼을 때 useEffect 함수가 실행됨. 비워두지 않는 것이 좋음.


    return (
        <div>
            <h1>MemberList</h1>
            <List
                headerName="Member"
                columns={columns}
                dataList={dataList}
            />
        </div>
    )
}

export default MemberList;