import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listInvoices() {
	const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;`;
  console.log('in listInvoices: ', data);
	return data;
}

//    




export async function GET() {
  // return Response.json({
  //   message:
  //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
  // });
  //console.log('async function GET');
  try {
    const res = Response.json(await listInvoices())
    console.log(res);
  	return Response.json(await listInvoices());

  } catch (error) {
    const resErr = Response.json({ error }, { status: 500 });
    console.log(resErr);
  	return Response.json({ error }, { status: 500 });
  }
  console.log()
}
