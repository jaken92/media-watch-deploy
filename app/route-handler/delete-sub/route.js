import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const idToDelete = formData.get('idToDelete');
  const supabase = createRouteHandlerClient({ cookies });

  //split up date to take out just the day of the month.

  //   const {
  //     data: { user },
  //   } = await supabase.auth.getUser();

  //   const userId = user?.id;
  await supabase.from('user_subscriptions').delete().eq('id', `${idToDelete}`);

  return NextResponse.redirect(`${requestUrl.origin}/home/my-subscriptions`, {
    status: 301,
  });
}
