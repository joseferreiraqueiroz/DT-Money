import { DialogContainer } from "../Header/style";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  ButtonConfirmFormTransaction,
  ButtonTypeIncomeOrOutcome,
  ContentForm,
  IncomeAndOutcomeButtons,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RadioGroup } from "radix-ui";
import { useTransactionsMutate } from "@/hooks/useTransactionsMutate";

const DialogSchemaValidation = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

export const DialogContainerComponent = () => {
  const { mutate } = useTransactionsMutate()
  type DialogSchemaValidationType = z.infer<typeof DialogSchemaValidation>;
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    control,
  } = useForm<DialogSchemaValidationType>({
    resolver: zodResolver(DialogSchemaValidation),
    defaultValues:{
      type:"income"
    }
  });

  async function handleCreateNewTransaction(data: DialogSchemaValidationType) {
    const newTransactionData = {
      ...data,
      createdAt: new Date().toISOString()
    }
    await new Promise(resolve => setTimeout(resolve, 2000))
    mutate(newTransactionData)
  }

  return (
    <DialogContainer>
      <DialogHeader>
        <DialogTitle>Nova transação</DialogTitle>
        <ContentForm>
          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input
              type="text"
              placeholder="Descrição"
              {...register("description")}
            />
            <input
              type="text"
              placeholder="Preço"
              {...register("price", { valueAsNumber: true })}
            />
            <input
              type="text"
              placeholder="Categoria"
              {...register("category")}
            />
            <Controller
              control={control}
              name="type"
              render={({field}) => {
                return (
                  <RadioGroup.Root
                    className="flex"
                    defaultValue="income"
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <IncomeAndOutcomeButtons className="w-full">
                      <ButtonTypeIncomeOrOutcome
                        variant="income"
                        type="button"
                        value="income"
                        id="income"
                      >
                        <ArrowCircleUp size={24} /> Entrada
                      </ButtonTypeIncomeOrOutcome>
                      <ButtonTypeIncomeOrOutcome
                        variant="outcome"
                        type="button"
                        value="outcome"
                        id="outcome"
                      >
                        <ArrowCircleDown size={24} /> Saída
                      </ButtonTypeIncomeOrOutcome>
                    </IncomeAndOutcomeButtons>
                  </RadioGroup.Root>
                );
              }}
            />
            <ButtonConfirmFormTransaction type="submit" disabled={isSubmitting}>
              Cadastrar
            </ButtonConfirmFormTransaction>
          </form>
        </ContentForm>
      </DialogHeader>
    </DialogContainer>
  );
};
