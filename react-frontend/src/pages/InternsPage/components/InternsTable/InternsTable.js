import "./InternsTable.css";
import React, {useEffect, useState} from "react";
import {Button, Popconfirm, Table} from "antd";
import SearchBarComponent from "../../../../components/SearchBarComponent/SearchBarComponent";
import axios from "axios";

function InternsTable () {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [totalInterns, setTotalInterns] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [interns, setInterns] = useState([
        {
            key: '1',
            nom: 'Salma Brahimi',
            dateDeNaissance:'07-01-2000',
            adresse:'Casablanca',
            email:'salma@gmail.com',
            nomUniversite:'Mundiapolis',
            niveauUniv:'2AINFO',
            CNE:'BA2244',
            durationStage:'3 mois',
            conventionStage:'file1.pdf'
        },
        {
            key: '2',
            nom: 'Omar Mouti',
            dateDeNaissance:'07-01-2000',
            adresse:'Casablanca',
            email:'omar@gmail.com',
            nomUniversite:'Mundiapolis',
            niveauUniv:'2AINFO',
            CNE:'BA2244',
            durationStage:'3 mois',
            conventionStage:'file2.pdf'
        },
        {
            key: '3',
            nom: 'Nouhaila OHAPOUNE',
            dateDeNaissance:'07-01-2000',
            adresse:'Casablanca',
            email:'nouhaila@gmail.com',
            nomUniversite:'Mundiapolis',
            niveauUniv:'2AINFO',
            CNE:'BA2244',
            durationStage:'3 mois',
            conventionStage:'file3.pdf'
        },
        {
            key: '4',
            nom: 'Imane sara',
            dateDeNaissance:'07-01-2000',
            adresse:'Casablanca',
            email:'imane@gmail.com',
            nomUniversite:'Mundiapolis',
            niveauUniv:'2AINFO',
            CNE:'BA2244',
            durationStage:'3 mois',
            conventionStage:'file4.pdf'
        },
        {
            key: '4',
            nom: 'Ali Omar',
            dateDeNaissance:'07-01-2000',
            adresse:'Casablanca',
            email:'ali@gmail.com',
            nomUniversite:'Mundiapolis',
            niveauUniv:'3AINFO',
            CNE:'BA2244',
            durationStage:'6 mois',
            conventionStage:'file5.pdf'
        },

]);


    const fetchInterns = async () => {
        try {
            setLoading(true);
            const response1 = await axios.get("http://localhost:8888/STAGIAIRE-SERVICE/stagiaires");
            const data1 = response1.data; // Assuming the API response has the list of interns in the 'data' property
            setInterns(data1);
            setTotalInterns(data1.length);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching interns:", error);
        }
    };
    const columns = [
        {
            title: 'Full Name',
            dataIndex: 'nom',
            key: 'nom',
        },
        {
            title: 'Birthday Date',
            dataIndex: 'dateDeNaissance',
            key: 'dateDeNaissance',
        },
        {
            title: 'Address',
            dataIndex: 'adresse',
            key: 'adresse',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'University name',
            dataIndex: 'nomUniversite',
            key: 'nomUniversite',
        },
        {
            title: 'University level',
            dataIndex: 'niveauUniv',
            key: 'niveauUniv',
        },
        {
            title: 'CNE',
            dataIndex: 'CNE',
            key: 'CNE',
        },
        {
            title: 'Internship period',
            dataIndex: 'durationStage',
            key: 'durationStage',
        },
        {
            title: 'Internship Agreement',
            dataIndex: 'conventionStage',
            key: 'conventionStage',
        },
        {
            title: 'Actions',
            dataIndex: 'action',
            width: 90,
            key: 'action',
            render: (_, record) => (
                <Popconfirm
                    title="Are you sure you want to delete this intern?"
                    onConfirm={() => handleDelete(record.key)}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button  className="delete-btn" type="danger">Delete</Button>
                </Popconfirm>
            ),
        },
    ];

    const handleDelete = async (id) => {
        try {
            // Make a DELETE request to the backend to delete the employee
            await axios.delete(`http://localhost:8888/STAGIAIRE-SERVICE/stagiares/${id}`);
            setInterns((prevDataSource) =>
                prevDataSource.filter((record) => record.key !== id)
            );

            console.log("Deleting intern with key:", id);
        } catch (error) {
            console.error("Error deleting intern:", error);
        }
    };
    const handlePageChange = (page, pageSize) => {
        setCurrentPage(page);
        setPageSize(pageSize);
    };

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
        // Filter the dataSource based on the search term
        const filteredData = searchTerm
            ? interns.filter((intern) =>
                intern.nom.toLowerCase().includes(searchTerm.toLowerCase())
            )
            : interns;

        setTotalInterns(filteredData.length);
        setInterns(filteredData);

        // Make API request to fetch filtered data from the backend
        axios.get("http://localhost:8888/STAGIAIRE-SERVICE/stagiares", {
            params: {
                searchTerm: filteredData
            }
        })
            .then((response) => {
                const filteredDataFromAPI = response.data;
                setInterns(filteredDataFromAPI);
                setTotalInterns(filteredDataFromAPI.length);
            })
            .catch((error) => {
                console.error("Error fetching filtered data:", error);
            });

    };

    const handleClear = () => {
        setSearchTerm("");
        fetchInterns().then(r => 'ERROR');
    };

    return (
        <>
            <h2>Interns</h2>
            <SearchBarComponent placeholder="Search for an intern..."
                                searchTerm={searchTerm}
                                onSearch={handleSearch}
                                onClear={handleClear}
            />
            <div className="table position-absolute end-0">
                <Table
                    loading={loading}
                    columns={columns}
                    dataSource={interns}
                    pagination={{
                        current: currentPage,
                        pageSize: pageSize,
                        total: totalInterns,
                        onChange: handlePageChange,
                        showSizeChanger: true, // To enable page size selection
                        pageSizeOptions: ['5', '10', '20'], // Available page sizes
                    }}
                />
            </div>
        </>
    );
};

export default InternsTable;
