import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

export const Filter = () => {

    return (<>
    <div className='filter'>

        <p>Language</p>
        <Select options={options} isMulti  placeholder="Language"/>

        <p>Skills</p>
        <Select options={options} isMulti placeholder="Skills"/>

    </div>

    </>)
}
