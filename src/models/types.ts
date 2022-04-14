export interface StudentType {
  admission_id: string,
  fname: string,
  lname: string,
  gender: string,
  dob: string,
  class: string,
  fee: number,
  parent_email: string,
  parent_alt_email: string,
  parent_phone: string
}

export interface ParentType {
  parent_fname: string,
  parent_lname: string,
  parent_gender: string,
  parent_email: string,
  parent_alt_email: string,
  parent_phone: string,
  street: string,
  city: string,
  state: string,
  country: string
}

export interface FeeType {
  class: string,
  amount: number,
  dueDate: Date
}