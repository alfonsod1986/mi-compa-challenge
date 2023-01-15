import Joi from 'joi';
import { MIN_SEQUENCE_SIZE, hasTheSameSize, isNxNTable } from '../../../../contexts/xmen/humans/lib';

const messages = {
  onlyString: 'All dna sequences must be strings',
  regex: 'All dna sequences must be valid and only contains A,T,G,C',
  notEmpty: 'dna must not be empty',
  hasNotTheSameSize: 'All dna sequences sizes must be equal',
  notNxNTable: `dna must be a ${MIN_SEQUENCE_SIZE} x ${MIN_SEQUENCE_SIZE} table`
};

export default Joi.object({
  dna: Joi.array()
    .required()
    .min(1)
    .items(
      Joi.string()
        .regex(/^[ATCG]+$/)
        .messages({
          'string.base': messages.onlyString,
          'string.pattern.base': messages.regex
        })
    )
    .custom((value, helper) => {
      if (!hasTheSameSize(value)) {
        return helper.message({ custom: messages.hasNotTheSameSize });
      }

      if (!isNxNTable(value)) {
        return helper.message({ custom: messages.notNxNTable });
      }

      return true;
    })
    .messages({
      'array.min': messages.notEmpty
    })
});
