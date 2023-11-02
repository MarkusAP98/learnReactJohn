import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  descriptions: z.string().min(3, { message: "Must discribe the item." }),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(1, "Amount must be at least 1"),
});

type FormData = z.infer<typeof schema>;

const Shopping = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="form-label" htmlFor="descriptions">
          Descrpitions
        </label>
        <input
          id="descriptions"
          type="text"
          className="form-control"
          {...register("descriptions")}
        />
        {errors.descriptions && (
          <p className="text-danger">{errors.descriptions.message}</p>
        )}
      </div>
      <div>
        <label className="form-label">Amount</label>
        <input
          id="amount"
          type="number"
          className="form-control"
          {...register("amount", {valueAsNumber: true})}
        />
        {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
      </div>
      <br></br>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};


export default Shopping;
