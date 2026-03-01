import { Resend } from 'resend';

const resend = new Resend('re_ihoL4UnD_9HYhww1z2mJpPqpny1KAbqjr');

async function test() {
  const { data, error } = await resend.emails.send({
    from: 'Test <info@slaufismrk.com>',
    to: 'slauf.i.smrk@gmail.com',
    subject: 'Test email iz terminala s verificirane domene',
    html: '<p>Ako ovo vidiš, Resend radi s novom domenom info@slaufismrk.com.</p>'
  });
  console.log({ data, error });
}
test();
