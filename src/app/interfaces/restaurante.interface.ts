export interface Plato {
    id?:            string;
    nombre:         string;
    submensaje?:    string;
    precio:         number;
    pathFoto:       string;
}

export interface Vino {
    id?:            string;
    nombre:         string;
    mensaje:        string;
    precio:         number;
    pathFoto:       string;
}

export interface Option {
    text: string;
    path: string;
    icono?: string;
}
  
export interface RedSocial {
    title: string;
    src: string;
    path: string;
    pathResponsive: string;
    pathNegro: string;
    pathHover: string;
    pathUsed: string;
}

export interface PlatoSchema {
    _id?:            string;
    __v?:            string;
    nombre:         string;
    submensaje?:    string;
    precio:         number;
    pathFoto?:      string;
    idTipoPlato:    string;
}

export interface RedSocialSchema {
    _id?:       string;
    __v?:       string;
    title:      string;
    src:        string;
}

export interface SeccionMenuSchema {
    _id?:           string;
    __v?:           string;
    nombre:         string;
    submensaje?:    string;
}

export interface SeccionVinacotecaSchema {
    _id?:           string;
    __v?:           string;
    nombre:         string;
    submensaje?:    string;
}
