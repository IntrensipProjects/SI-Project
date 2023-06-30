import "./HeaderComponent.css";
import React, {useEffect} from "react";
import {Avatar, Button, Col, Dropdown, Menu, message, Row} from "antd";
import {LogoutOutlined, MoreOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";


function HeaderComponent() {

    const navigate = useNavigate();

    const success = () => {
        message.open({
            type: 'success',
            content: 'Log out successful !! ',
        });
    };
    const handleLogout = () => {
        success(); // Call the success function
        setTimeout(() => {
            navigate("/login"); // Redirect to login component after 1.5s
        }, 1500);
    };

    const items = [
        {
            label: 'LOG OUT',
            icon: <LogoutOutlined/>,
        }];
    const menuProps = {
        items,
        onClick: handleLogout,
    };
    return (
        <div className="header-container">
            <Row>
                <Col>
                    <h1>HGS SYSTEM</h1>
                </Col>
                <Col className="text-end">
                    <Avatar size={43} icon={<UserOutlined/>} style={{backgroundColor: "white", color: "black"}}/>
                </Col>
                <div className="nom">
                    <h6>Nouhaila Ohapoune</h6>
                    Admin
                </div>
                <Dropdown menu={menuProps}>
                    <MoreOutlined className="icon"/>
                </Dropdown>
            </Row>
        </div>
    );
};

export default HeaderComponent;
