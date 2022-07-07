export interface Doctor {
    _id:       string;
    name:      string;
    last_name: string;
    email:     string;
    password:  string;
    role:      string[];
    isActive:  boolean;
    patients:  any[];
    createdAt: Date;
    updatedAt: Date;
}
