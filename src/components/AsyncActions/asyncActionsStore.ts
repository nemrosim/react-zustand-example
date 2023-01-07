import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface AsyncActionsStoreProps {
    data: Array<{
        email: string;
        id: number;
        name: string;
        phone: string;
        username: string;
        website: string;
    }>;
    loading: boolean;
    error: any;
    fetchData: () => Promise<void>;
    updateUser: (id: number) => void;
}

export const useAsyncActionsStore = create<AsyncActionsStoreProps, [['zustand/devtools', never]]>(
    devtools(
        (setState, getState) => ({
            data: [],
            loading: false,
            error: undefined,
            fetchData: async () => {
                try {
                    setState({ loading: true }, false, {
                        type: 'fetchData-loading',
                        value: true,
                    });

                    const response = await fetch('https://jsonplaceholder.typicode.com/users');
                    const data = await response.json();
                    setState({ data }, false, { type: 'fetchData-done', value: data });
                } catch (error) {
                    setState({ error }, false, { type: 'fetchData-error', value: error });
                } finally {
                    setState({ loading: false }, false, {
                        type: 'fetchData-loading',
                        value: false,
                    });
                }
            },
            updateUser: (id: number) => {
                setState(
                    {
                        data: getState().data.map((user) => {
                            if (user.id === id) {
                                return {
                                    ...user,
                                    name: `${user.name} |`,
                                };
                            }

                            return user;
                        }),
                    },
                    false,
                    {
                        type: 'fetchData-loading',
                        value: false,
                    },
                );
            },
        }),
        { name: 'useAsyncActionsStore', trace: true },
    ),
);
