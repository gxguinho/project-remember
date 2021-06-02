import React,{useContext,createContext,useState} from 'react';
import { View } from 'react-native';


interface AuthContextData{
  signed: boolean;
  name: string | null;
  singIn(name:String): Promise<void>;
  singOut(): void;
}


const AuthContext = createContext<AuthContextData>(({}as AuthContextData))

export const AuthProvider: React.FC = ({children}) => {
  
  const [name,setName] = useState<string | null >(null)
  
  async function singIn(name:string){
    setName(name)
  }
  async function singOut(){
    await setName(null)
  }
  return (
    <AuthContext.Provider value={{signed: !!name, name, singIn,singOut}} >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  const context = useContext(AuthContext);
  return context;
};