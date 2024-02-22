import React from "react";
import styles from "styles/Autocomplete.module.scss";
import {useQuery} from "@tanstack/react-query";
import api from "../services/user.service";
import {Autocomplete, CircularProgress, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useRecoilState} from "recoil";
import {userAtom} from "../store/atoms";
import {IUser} from "../types/api.interfaces";
import {v4} from 'uuid';



const AutocompleteUser = () => {
    const [ user, setUser ] = useRecoilState(userAtom);
    const { isPending, isError, data: users, error } = useQuery({queryKey: ['users'], queryFn:() => api.getAll()});
    if (isPending) return <div><CircularProgress /></div>;
    if (error instanceof Error) return <div>An error occurred: {error.message}</div>;

    return <Autocomplete
        id="user-select"
        sx={{ width: 300 }}
        options={users ?? []}
        value={user}
        onChange={(event: any, newValue: IUser | null) => {
            setUser(newValue);
        }}
        autoHighlight
        getOptionLabel={(user) => `${user.NAME} ${user.LAST_NAME}`}
        renderOption={(props, user) => (
            <Box key={v4()} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                <img
                    loading="lazy"
                    width="20"
                    srcSet={user.PERSONAL_PHOTO}
                    src={user.PERSONAL_PHOTO || 'https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png'}
                    alt={user.EMAIL}
                    style={{borderRadius: '50%', marginRight: "5px"}}
                />
                {`${user.NAME} ${user.LAST_NAME}`}
            </Box>
        )}
        renderInput={(params) => (
            <>
                <TextField
                    {...params}
                    label="Выберите сотрудника"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            </>

)}
/>
};

export default AutocompleteUser;