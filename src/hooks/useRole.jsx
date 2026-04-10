import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: userRole, isLoading: isRoleLoading } = useQuery({
    // ইউজার ইমেইল না আসা পর্যন্ত কোয়েরি চলবে না
    queryKey: ["user-role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      // আপনার ব্যাকএন্ড রাউট অনুযায়ী URL টি চেক করুন
      const res = await axiosSecure.get(`/users/role/${user.email}`);
      return res.data?.role;
    },
  });

  // আপনার Navbar-এ যেহেতু আপনি [ ] দিয়ে রিসিভ করছেন, তাই এখানেও [ ] ই দিন
  return [userRole, isRoleLoading];
};

export default useRole;
