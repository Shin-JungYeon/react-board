function Table(props) {
    const {headerName, dataList} = props;

    return (
        <table className="common-table">
            <thead>
            <tr>
                {headerName}
            </tr>
            </thead>
            <tbody>
            {
                dataList
            }
            </tbody>

        </table>
    )
}

export default Table;