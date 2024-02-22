import axios from 'axios';
import {IUser, IUserGetResult} from "../types/api.interfaces";


class ApiService {
    public URL_KEY = "https://gagawa.bitrix24.ru/rest/1/3sbcr69rrtgwew1v/";
    // public URL_KEY = "https://intranet.gctm.ru/rest/1552/c751t78u4kgzxy2i/";


    private UF_FIELDS: number[][] = [
        [
            159,
            161,
            163,
            165
        ],
        [
            167,
            169,
            171,
            173
        ],
        [
            175,
            177,
            179,
            181
        ],
        [
            183,
            185,
            187,
            189
        ],
        [
            191,
            193,
            195,
            197
        ],
        [
            199,
            201,
            203,
            205
        ],
        [
            307,
            309,
            311,
            313
        ],
        [
            315,
            317,
            319,
            321
        ],
        [
            323,
            325,
            327,
            329
        ],
        [
            331,
            333,
            335,
            337
        ],
        [
            339,
            341,
            343,
            345
        ],
        [
            347,
            349,
            351,
            353
        ],
        [
            355,
            357,
            359,
            361
        ]
    ]

    async getAll(start: number = 0, allUsers: IUser[] = []): Promise<IUser[]> {
        const response = await axios.post<IUserGetResult>(this.URL_KEY + 'user.get', {
            start, // Параметр для пагинации
            USER_TYPE: "employee",
            ACTIVE: true
        });

        const { data } = response;
        const users:IUser[] = allUsers.concat(data.result);

        if (data.next) {
            return this.getAll(data.next, users);
        }

        return users;
    }

    async createDeal(user: IUser | null, test1: number[] = [0, 0, 0, 0, 0, 0], test2: number[] = [0, 0, 0, 0, 0, 0]): Promise<any> {
        await axios.post<any>(this.URL_KEY + 'crm.deal.add', {
            fields: {
                TYPE_ID: 1,
                CATEGORY_ID: 1,
                STAGE_ID: 'NEW',
                TITLE: `${user && user.NAME} ${user && user.LAST_NAME   } прошел тест`,
                UF_CRM_1699599951990: this.UF_FIELDS[0][test1[0] - 1],
                UF_CRM_1699599977064: this.UF_FIELDS[1][test1[1] - 1],
                UF_CRM_1699599999778: this.UF_FIELDS[2][test1[2] - 1],
                UF_CRM_1699600032795: this.UF_FIELDS[3][test1[3] - 1],
                UF_CRM_1699600054919: this.UF_FIELDS[4][test1[4] - 1],
                UF_CRM_1699600072362: this.UF_FIELDS[5][test1[5] - 1],
                UF_CRM_1706681471166: this.UF_FIELDS[6][test2[0] - 1],
                UF_CRM_1706681492207: this.UF_FIELDS[7][test2[1] - 1],
                UF_CRM_1706681584623: this.UF_FIELDS[8][test2[2] - 1],
                UF_CRM_1706681598581: this.UF_FIELDS[9][test2[3] - 1],
                UF_CRM_1706681618959: this.UF_FIELDS[10][test2[4] - 1],
                UF_CRM_1706681626832: this.UF_FIELDS[11][test2[5] - 1],
                UF_CRM_1706681642984: this.UF_FIELDS[12][test2[6] - 1],
            }
        }
        );
    }
};

export default new ApiService();