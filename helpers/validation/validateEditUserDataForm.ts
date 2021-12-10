import {EditUserDataFormValues, EditUserDataValidationErrors} from "#/validationTypes";
import {validationErrors} from "@/const/validationErrors";
import {regexpTel, regexpUsername} from "@/const/regexp";


export const validateEditUserDataForm = function ({
                                                    username,
                                                    tel
                                                  }: EditUserDataFormValues): EditUserDataValidationErrors {
  const errors: EditUserDataValidationErrors = {}

  if (username.length && !regexpUsername.test(username)) {
    errors.username = validationErrors.username
  }

  if (tel.length && !regexpTel.test(tel)) {
    errors.tel = validationErrors.tel
  }

  return errors
}