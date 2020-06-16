import React from "react";
import { render, fireEvent, waitFor, getByTestId } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const {container} = render(<CheckoutForm />);
  const header = container.querySelector('h2')
  expect(header.textContent).toBe('Checkout Form');
});

test("form shows success message on submit with form details", async () => {
  const { container } = render(<CheckoutForm />);
  const successMessage = render(<CheckoutForm />);
  const firstName = container.querySelector('input[name="firstName"]');
  const lastName = container.querySelector('input[name="lastName"]');
  const address = container.querySelector('input[name="address"]');
  const city = container.querySelector('input[name="city"]');
  const state = container.querySelector('input[name="state"]');
  const zip = container.querySelector('input[name="zip"]');
  const submit = container.querySelector('button')

  await waitFor(() => {
    fireEvent.change(firstName, {
      target: {
        value: "Sucessful"
      }
    })
  })

  await waitFor(() => {
    fireEvent.change(lastName, {
      target: {
        value: "Test"
      }
    })
  })

  await waitFor(() => {
    fireEvent.change(address, {
      target: {
        value: "132 Road St"
      }
    })
  })

  await waitFor(() => {
    fireEvent.change(city, {
      target: {
        value: "Waterbury"
      }
    })
  })

  await waitFor(() => {
    fireEvent.change(state, {
      target: {
        value: "CT"
      }
    })
  })

  await waitFor(() => {
    fireEvent.change(zip, {
      target: {
        value: "06710"
      }
    })
  })

  await waitFor(() => {
    fireEvent.click(submit)
  })

 // wait for appearance
 await waitFor(() => {
  const success = successMessage.getByTestId('successMessage')
  expect(success.textContent).toBe('You have ordered some plants! Woo-hoo! 🎉Your new green friends will be shipped to:Sucessful Test132 Road StWaterbury, CT 06710')
},{timeout: 500})

});
