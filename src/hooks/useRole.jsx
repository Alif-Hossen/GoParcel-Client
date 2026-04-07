import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useRole = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { isLoading: isRoleLoading, data: userRole = 'user' } = useQuery({
        queryKey: ['user-role', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/role/${user?.email}`);
            return res.data?.role || 'user';
        },
    });

    return [userRole, isRoleLoading];
};

export default useRole;