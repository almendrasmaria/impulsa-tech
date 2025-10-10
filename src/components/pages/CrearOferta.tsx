import React from 'react';
import Input from '../Input';
import Button from '../Button';
import CustomDropdown from '../CustomDropdown';

import styles from '../styles/CompanyProfilePage.module.css';

const CrearOferta: React.FC = () => {
    // Opciones para los dropdowns
    type Option = { value: string; label: string };
    const modalidadOptions: Option[] = [
        { value: 'presencial', label: 'Presencial' },
        { value: 'remoto', label: 'Remoto' },
        { value: 'hibrido', label: 'Híbrido' },
    ];
    const seniorityOptions: Option[] = [
        { value: 'junior', label: 'Junior' },
        { value: 'semi-senior', label: 'Semi Senior' },
        { value: 'senior', label: 'Senior' },
    ];
    const tipoPuestoOptions: Option[] = [
        { value: 'tecnico', label: 'Técnico' },
        { value: 'administrativo', label: 'Administrativo' },
        { value: 'otro', label: 'Otro' },
    ];

    // Estado para los dropdowns
    const [modalidad, setModalidad] = React.useState<Option | null>(null);
    const [seniority, setSeniority] = React.useState<Option | null>(null);
    const [tipoPuesto, setTipoPuesto] = React.useState<Option | null>(null);

    return (
        <form className="flex flex-col gap-8">
            <div className={styles.formGrid}>
                <div>
                    <Input label="Título del puesto" name="titulo" placeholder="Ej: Desarrollador Frontend" required className="font-poppins" />
                </div>
                <div>
                    <CustomDropdown label="Modalidad" options={modalidadOptions} value={modalidad} onChange={setModalidad} name="modalidad" required className="font-poppins" />
                </div>
                <div>
                    <CustomDropdown label="Seniority" options={seniorityOptions} value={seniority} onChange={setSeniority} name="seniority" required className="font-poppins" />
                </div>
                <div>
                    <CustomDropdown label="Tipo de puesto" options={tipoPuestoOptions} value={tipoPuesto} onChange={setTipoPuesto} name="tipoPuesto" required className="font-poppins" />
                </div>
            </div>
            <div className={styles.descripcionSeparada}>
                <Input label="Descripción" name="descripcion" multiline rows={4} placeholder="Describe la posición y responsabilidades" required className="font-poppins" />
            </div>
            <div className="flex justify-end gap-3 mt-4">
                <Button variant="primary" type="submit">Publicar oferta</Button>
            </div>
        </form>
    );
};

export default CrearOferta;