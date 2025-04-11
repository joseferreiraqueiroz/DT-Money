import { ButtonNewTransaction, HeaderContainer, HeaderContent } from "./style";
import Logo from "../../../public/assets/Logo.svg";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogContainerComponent } from "../DialogContainer";
export function HeaderComponent() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />
        <Dialog>
          <DialogTrigger asChild>
            <ButtonNewTransaction>Nova transação</ButtonNewTransaction>
          </DialogTrigger>
         <DialogContainerComponent/>
        </Dialog>
      </HeaderContent>
    </HeaderContainer>
  );
}
