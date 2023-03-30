import { HeaderContainer, HeaderContent, NewTrasationButton } from "./style";
import logoImg from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTrasationsModal } from "../NewTransationsModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTrasationButton>Nova transação</NewTrasationButton>
          </Dialog.Trigger>
          <NewTrasationsModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
