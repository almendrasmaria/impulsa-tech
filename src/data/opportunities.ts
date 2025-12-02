export interface Opportunity {
  id: number;
  companyLogo: string;
  position: string;
  companyName: string;
  location: string;
  schedule: string;
  modality: string;
  description: string;
}

export const opportunities: Opportunity[] = [
  {
    id: 1,
    companyLogo: "images/logo-corteva.png",
    position: "Programador/a Jr",
    companyName: "Corteva Agriscience",
    location: "Capital Federal",
    schedule: "Full-Time",
    modality: "Híbrido",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 2,
    companyLogo: "images/logo-corteva.png",
    position: "Desarrollador/a Backend Jr",
    companyName: "Corteva Agriscience",
    location: "Buenos Aires-GBA",
    schedule: "Part-Time",
    modality: "Remoto",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 3,
    companyLogo: "images/logo-corteva.png",
    position: "Soporte Técnico Jr",
    companyName: "Corteva Agriscience",
    location: "Capital Federal",
    schedule: "Part-Time",
    modality: "Presencial",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];
