//import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeStackScreenProps} from "@react-navigation/native-stack"; 
import { Repositorios } from "./response";

export type StackParams = {
  Home: undefined;
  Details: Repositorios;
};

export type HomeProps = NativeStackScreenProps<StackParams, "Home">;

export type DetailsProps = NativeStackScreenProps<StackParams, "Details">;
