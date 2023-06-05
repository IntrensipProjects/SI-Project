import "./HeaderComponent.css";
import React from "react";
import {Avatar, Col, Dropdown, Menu, Row} from "antd";
import {LogoutOutlined, MoreOutlined, UserOutlined} from "@ant-design/icons";
import {Link, useNavigate} from "react-router-dom";


function HeaderComponent() {

    const navigate = useNavigate();
    const handleLogout = () => {

        // Redirect to login component
        navigate("/login");
    };

    const items = [
        {
            label: 'LOG OUT',
            icon: <LogoutOutlined />,

        }];
    const menuProps = {
        items,
        onClick: handleLogout,
    };
    return (
            <div className= "header-container">
                <Row>
                    <Col>
                        <h1>HGS SYSTEM</h1>
                    </Col>
                    <Col className="text-end">
                        <Avatar size={43} icon={<UserOutlined />}  style={{ backgroundColor: "white", color: "black" }} />
                    </Col>
                    <div className="nom">
                        <h6>Nouhaila Ohapoune</h6>
                             Admin
                    </div>
                    <Dropdown menu={menuProps} >
                        <MoreOutlined  className="icon"/>
                    </Dropdown>

                </Row>
            </div>
    );
};

export default HeaderComponent;
