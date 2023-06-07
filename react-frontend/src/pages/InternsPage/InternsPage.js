import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import SideBarComponent from "../../components/SideBarComponent/SideBarComponent";
import TableComponent from "../../components/TableComponent/TableComponent";

function InternsPage(){
    return(
        <>
            <HeaderComponent/>
            <SideBarComponent defaultSelectedKeys={['2']} />
            <TableComponent/>
        </>
    );
}
export default InternsPage;