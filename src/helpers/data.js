import { API_URL } from "../config"

export const profilePicUrl = `${API_URL}/static/files/pprofilePics`;



export const academicCertficatesUrl = `${API_URL}/static/files/academicCertficates`;
export const admissionLetterUrl = `${API_URL}/static/files/admissionLetter`;
export const BillUrl = `${API_URL}/static/files/Bill`;
export const childrenBformUrl = `${API_URL}/static/files/childrenBform`;
export const CNICUrl = `${API_URL}/static/files/CNIC`;
export const DeathCertificateUrl = `${API_URL}/static/files/DeathCertificate`;
export const DomicileUrl = `${API_URL}/static/files/Domicile`;
export const FamilyUrl = `${API_URL}/static/files/Family`;
export const IncomeCertificateUrl = `${API_URL}/static/files/IncomeCertificate`;
export const passimageUrl = `${API_URL}/static/files/passimage`;
export const RenewalUrl = `${API_URL}/static/files/Renewal`;
export const RentAgreementUrl = `${API_URL}/static/files/RentAgreement`;
export const resumeUrl = `${API_URL}/static/files/resume`;
export const vouchersUrl = `${API_URL}/static/files/vouchers`;
export const newURL = `${API_URL}/static/files/new`;



export const UserTypes = [
    { value: "admin", label: "Admin" },
    // { value: "student", label: "Student" },
    { value: "university", label: "University" },
    { value: "recovery", label: "Recovery" },
    { value: "finance", label: "Finance" },
    { value: "operations", label: "Operations" },
    { value: "recovery manager", label: "Recovery Manager" },
    { value: "disbustment manager", label: "Disbustment Manager" },
    { value: "viewer", label: "Viewer" },
]

export const gender = [{ label: "Select your Gender", value: null }, { label: "Male", value: "male" }, { label: "Female", value: "female" }]

export const states = ["Sindh", "Punjab", "KPK"]

export const cities = ["Islamabad", "karachi", "Lahore", "Peshawar"]

export const UniFields = ["engineering", "medical", "commerce"]

export const actions = ["inprocess", "approve", "interview", "disburse", "reject"]

export const defaultFields = ["one", "two", "three"]