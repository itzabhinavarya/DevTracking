import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useUser } from '../context/UserContext'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component';
const AllRepo = () => {
    const [allRepo, setAllRepo] = useState()
    const { userName } = useUser()
    const fetchAllRepo = async () => {
        const resp = await axios.get(`https://api.github.com/users/${userName}/repos?page`)
        setAllRepo(resp.data)
    }
    useEffect(() => {
        fetchAllRepo()
    }, [userName])

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            width: "200px"
        },
        {
            name: 'Description',
            selector: row => row.description,
            // width: "200px"
        },
        {
            name: 'Action',
            selector: row => row.name,
        },
    ];

    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };
    return (
        <>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {allRepo?.map((value, index) => (
                    <div key={index} className="flex flex-col justify-between p-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className='mb-3'>
                            <div>
                                <a href="#" className="flex-gro">
                                    <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">{value.name}</h5>
                                </a>
                            </div>
                            <div className=''>
                                <p className="text-xs text-gray-700 dark:text-gray-400">{value.full_name}</p>
                            </div>
                            <div className='mb-2 mt-2'>
                                <p className="text-xs text-gray-700 dark:text-gray-400">{value.description}</p>
                            </div>
                            <div className="mb-2 p-1 bg-gray-100 rounded">
                                <p className="text-xs text-gray-700 dark:text-gray-400">
                                    <span className="text-red-600 font-semibold">git clone</span> <span className="italic text-blue-600">{value.clone_url}</span>
                                </p>
                            </div>
                            <div className=''>
                                <p className='text-xs text-gray-700 dark:text-gray-400'>Star : {value.stargazers_count}</p>
                                <p className='text-xs text-gray-700 dark:text-gray-400'>Language : {value.language}</p>
                                <p className='text-xs text-gray-700 dark:text-gray-400'>Forks : {value.forks}</p>
                                <p className='text-xs text-gray-700 dark:text-gray-400'>visibility : {value.visibility}</p>
                                <p className='text-xs text-gray-700 dark:text-gray-400'>open issues : {value.open_issues}</p>
                                <p className='text-xs text-gray-700 dark:text-gray-400'>watchers : {value.watchers}</p>
                                <p className='text-xs text-gray-700 dark:text-gray-400'>default branch : {value.default_branch}</p>
                                <p className='text-xs text-gray-700 dark:text-gray-400'>Open issues : {value.open_issues_count}</p>
                                <p className='text-xs text-gray-700 dark:text-gray-400'>Created At : {value.created_at}</p>
                                <p className='text-xs text-gray-700 dark:text-gray-400'>Last Push : {value.pushed_at}</p>
                                <p className='text-xs text-gray-700 dark:text-gray-400'>Updated At : {value.updated_at}</p>
                            </div>
                            <div className='flex flex-wrap gap-1 mt-2'>
                                {value.topics?.map((topic) => (
                                    <p className='text-xs text-gray-700 dark:text-gray-400'>{topic}</p>
                                ))}
                            </div>
                        </div>
                        <a href={value.html_url} target='_BLANK' className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            View on Github
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default AllRepo