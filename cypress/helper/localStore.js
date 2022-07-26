class StorageClass {
    username;

    getUserName = () => {
        return this.username;
    }

    setUserName = (usernameValue) => {
        this.username = usernameValue;
    }

}

export const storage = new StorageClass();
