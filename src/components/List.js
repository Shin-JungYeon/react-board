import {Table} from "react-bootstrap";

function List(props) {
    const {headerName, columns, dataList} = props;

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                {/* 자바스크립트 배열의 내장 함수 map() > 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 새로운 배열 생성 */}
                {/* arr.map(callbackFunction(currenValue, index, array), thisArg) */}
                {columns.map((column) => (
                    <th key={column}>{column}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            <tr>

            </tr>
            </tbody>
        </Table>
    )
}

export default List;