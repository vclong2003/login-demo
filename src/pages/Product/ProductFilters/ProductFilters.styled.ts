import { Formik, Form as FormikForm } from "formik";
import styled from "styled-components";
import { FormButton } from "../../../components/formComponents";

export const ProductFilter = styled(Formik)``;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: var(--s-3);
`;

export const ApplyButton = styled(FormButton)`
  font-weight: var(--fw-normal);
  font-size: var(--fs-lg);
  margin: 0;
`;

export const CancelButton = styled(FormButton)`
  background-color: var(--ice-blue);
  font-weight: var(--fw-normal);
  font-size: var(--fs-lg);
  margin: 0;
`;
