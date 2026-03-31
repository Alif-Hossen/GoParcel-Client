import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useRole = () => {
  const { user } = useAuth();
  const { data: userRole, isPending: isRoleLoading } = useQuery({
    // এখানে userRole নাম দিন
    queryKey: [user?.email, "userRole"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/users/role/${user.email}`,
      );
      return res.data?.role;
    },
  });
  return [userRole, isRoleLoading]; // নিশ্চিত করুন এই নাম দুটিই রিটার্ন হচ্ছে
};

export default useRole;
