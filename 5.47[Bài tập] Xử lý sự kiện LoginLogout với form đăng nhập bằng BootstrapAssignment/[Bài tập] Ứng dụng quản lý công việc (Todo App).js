import React, {useState} from 'react';

const Display = () => {
    const [studentList, setStudentList] = useState([])
    const [inputStudent, setInputStudent] = useState({
        name: '',
        phone: "",
        email: ''
    })
    const onChangeHandled = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setInputStudent({...inputStudent, [name]: value})
    }
    const addStudent = () => {
        setStudentList([...studentList, inputStudent])
        setInputStudent({
            name: '',
            phone: "",
            email: ''
        })
    }

    const deleteStudent = (name) => {
        setStudentList(studentList.filter(student => (
            student.name !== name
        )))
    }
    return (
        <div>
            <h1>Todo List</h1>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name" type="text"
                value={inputStudent.name}
                onChange={onChangeHandled}/> <br/>
            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email" type="text"
                value={inputStudent.email}
                onChange={onChangeHandled}/> <br/>
            <label htmlFor="email">Phone</label>
            <input
                id='Phone'
                name="phone" type="number"
                value={inputStudent.phone}
                onChange={onChangeHandled}/> <br/>
            <button type="button" onClick={addStudent}>Add Todo</button>
            <TaskList studentList={studentList} delete={deleteStudent}/>
        </div>
    );
};


const TaskList = (props) => {
    console.log(props.studentList);
    return (
        <table className="table table">
            <tbody>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Delete</th>
            </tr>
            {props.studentList.map((student, index) => (
                <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>
                        <button onClick={() => props.delete(student.name)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}


export default Display;