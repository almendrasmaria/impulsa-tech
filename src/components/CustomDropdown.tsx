import React from 'react';
import Select from 'react-select';

interface Option {
    value: string;
    label: string;
}

interface CustomDropdownProps {
    label?: string;
    options: Option[];
    value?: Option | null;
    onChange?: (option: Option | null) => void;
    name?: string;
    required?: boolean;
    className?: string;
}

const customStyles = {
    control: (provided: any) => ({
        ...provided,
        borderRadius: 10,
        borderColor: '#3A416F',
        minHeight: 42,
        boxShadow: 'none',
        fontFamily: 'Poppins, sans-serif',
        backgroundColor: '#F8F9FC',
        fontSize: 14,
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        borderRadius: 10,
        backgroundColor: state.isFocused ? '#1829DB' : '#F8F9FC',
        color: state.isFocused ? '#fff' : '#18293A',
        fontFamily: 'Poppins, sans-serif',
        cursor: 'pointer',
        fontSize: 14,
    }),
    singleValue: (provided: any) => ({
        ...provided,
        color: '#18293A',
        fontFamily: 'Poppins, sans-serif',
        fontSize: 14,
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: '#718096',
        fontFamily: 'Poppins, sans-serif',
        fontSize: 14,
    }),
    menu: (provided: any) => ({
        ...provided,
        borderRadius: 10,
        overflow: 'hidden',
    }),
};

const CustomDropdown: React.FC<CustomDropdownProps> = ({ label, options, value, onChange, name, required, className }) => (
    <div className={className}>
        {label && <label className="block text-gray-700 mb-1 label-light-16">{label}</label>}
        <Select
            options={options}
            value={value}
            onChange={onChange}
            name={name}
            required={required}
            placeholder="Seleccionar"
            styles={customStyles}
            isClearable
        />
    </div>
);

export default CustomDropdown;
