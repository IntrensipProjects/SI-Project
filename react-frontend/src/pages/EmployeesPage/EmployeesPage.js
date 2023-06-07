import SideBarComponent from "../../components/SideBarComponent/SideBarComponent";
import TableComponent from "../../components/TableComponent/TableComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";

function EmployeesPage(){

    return(
        <>
            <HeaderComponent />
            <SideBarComponent defaultSelectedKeys={['1']} />
            <TableComponent/>
        </>
    );
}

export default EmployeesPage;