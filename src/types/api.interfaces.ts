export interface IUserGetResult {
    result: IUser[]
    next?: number
    total: number
    Time: ITime
}

export interface IUser {
    ID: string
    XML_ID: string
    ACTIVE: boolean
    NAME: string
    LAST_NAME: string
    EMAIL: string
    LAST_LOGIN: string
    DATE_REGISTER: string
    IS_ONLINE: string
    TIME_ZONE_OFFSET?: string
    TIMESTAMP_X: ITimestampX
    LAST_ACTIVITY_DATE?: ILastActivityDate
    PERSONAL_GENDER: string
    PERSONAL_BIRTHDAY: string
    UF_EMPLOYMENT_DATE: string
    UF_DEPARTMENT: number[]
    UF_USR_1698232611297?: string
    USER_TYPE: string
    PERSONAL_PHOTO?: string
    PERSONAL_MOBILE?: string
    SECOND_NAME?: string
    TIME_ZONE?: string
    PERSONAL_WWW?: string
    PERSONAL_CITY?: string
    WORK_PHONE?: string
    WORK_POSITION?: string
}

export interface ITimestampX {}

export interface ILastActivityDate {}

export interface ITime {
    start: number
    finish: number
    duration: number
    processing: number
    date_start: string
    date_finish: string
    operating_reset_at: number
    operating: number
}
