'use client';

import { createContext, useEffect, useState, useContext, ReactNode } from 'react';
import { supabase } from '@/lib/supabaseClient';

type UserData = {
  name: string;
} | null;

const UserContext = createContext<UserData>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('name')
          .eq('id', user.id)
          .single();

        if (profile?.name) {
          setUserData({ name: profile.name });
        }
      }
    };
    fetchUser();
  }, []);

  return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
