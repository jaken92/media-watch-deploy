// 'use client';
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { ExitButton } from "@/components/ExitButton/ExitButton";
import styles from "./about.module.css";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function About() {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <Link className={styles.exitButton} href="/">
          <ExitButton />
        </Link>

        <h1 className={styles.headingOne}>
          Hur fungerar <br /> Media Watch?
        </h1>

        <p className={styles.intro}>
          Håll enkelt koll på dina webbaserade betalningar med vår app – få
          översikt, påminnelser och säkerhet i ett enda verktyg.
        </p>
        <div className={styles.list}>
          <ul>
            <li>
              Betaltjänster Under Ett Tak: Slipp bläddra genom flera webbplatser
              och appar för att hålla koll på dina månatliga betalningar. Vår
              app aggregerar alla dina betaltjänster på en enda plattform.
            </li>
            <li>
              Tydlig Översikt: Få en snabb och tydlig överblick över dina
              månatliga kostnader. Vi organiserar dina betalningar så att du
              enkelt kan se vad du betalar och när.
            </li>
            <li>
              Påminnelser: Glöm aldrig en betalning igen! Vår app skickar dig
              påminnelser i tid så att du kan undvika försenade betalningar och
              påföljande avgifter.
            </li>
            <li>
              Anpassad Analys: Förstå dina utgifter bättre med våra anpassade
              analyser. Få insikter om dina utgiftsmönster och identifiera
              möjligheter att spara pengar.
            </li>
            <li>
              Säkerhet Först: Vi prioriterar din säkerhet. Din personliga och
              finansiella information är säker och skyddad med toppmodern
              kryptering.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
