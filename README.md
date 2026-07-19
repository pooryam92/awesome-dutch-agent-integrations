# AI Integratie NL

> Dutch AI Agent Integrations Directory

A curated directory of **Dutch agent-integrations** — MCP servers, skills, plugins, and scripts that let an AI assistant use Dutch services.

Each listing shows, at a glance, whether it is official, commercial, or community, and how mature it is.

To add an integration, see [CONTRIBUTING.md](CONTRIBUTING.md). Only ever edit the JSON in `/data` — the catalogue below is generated from it by `scripts/generate.mjs`.

<!-- BEGIN CATALOGUE — generated from /data by scripts/generate.mjs. Do not edit between these markers; run `npm run generate`. -->

_Every listing is tagged with its type and origin; a status badge appears only when it is **not** live (beta, preview, concept, abandoned)._

## Accounting Finance

| Name | Description | Service | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [bunq Partner MCP](https://github.com/bunq/partner-mcp) | Lets an AI assistant drive the bunq Partner API — onboarding, KYC, accounts, payments, cards, and compliance. | bunq | ![MCP · Official](assets/badges/tags-mcp-official.svg) |
| [e-Boekhouden MCP](https://github.com/CodeMill-Solutions/e-boekhouden-mcp) | Lets an AI assistant read and write e-Boekhouden administration using your own API credentials. | e-Boekhouden | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [Mollie MCP](https://docs.mollie.com/docs/mollie-mcp-server) | Lets an AI assistant manage Mollie payments, customers, invoices, subscriptions, balances, settlements, terminals, and webhooks. | Mollie | ![MCP · Official](assets/badges/tags-mcp-official.svg) |
| [Moneybird MCP](https://developer.moneybird.com/tools/mcp) | Lets an AI assistant manage Moneybird bookkeeping — invoices, contacts, and accounting data. | Moneybird | ![MCP · Official](assets/badges/tags-mcp-official.svg) |
| [Nmbrs AI Connector](https://www.nmbrs.com/ai-connector) | Lets an AI assistant perform Dutch payroll actions in Nmbrs, with confirmation-gated writes. | Nmbrs | ![MCP · Official · Beta](assets/badges/tags-mcp-official-beta.svg) |
| [Praat met je Boekhouding](https://praatmetjeboekhouding.nl/en/exact-online-mcp-server) | Lets an AI assistant work with Exact Online bookkeeping across 86 tools — invoicing, BTW/ICP, and reporting, read-only by default. | Exact Online | ![MCP · Commercial](assets/badges/tags-mcp-commercial.svg) |
| [Simplicate MCP](https://developer.simplicate.com/docs/mcp/getting_started/) | Lets an AI assistant work with Simplicate's project, CRM, and invoicing data via a per-domain hosted endpoint. | Simplicate | ![MCP · Official](assets/badges/tags-mcp-official.svg) |
| [Twinfield MCP](https://github.com/CodeMill-Solutions/twinfield-mcp) | Lets an AI assistant query and update Twinfield bookkeeping over its SOAP API. | Twinfield | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [WeFact MCP](https://github.com/NickAldewereld/wefact-mcp) | Lets an AI assistant manage WeFact debtors, invoices, products, and subscriptions. | WeFact | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [Yuki MCP](https://github.com/Dytto-ai/yuki-mcp) | Lets an AI assistant drive Yuki accounting across 102 operations, with write actions gated. | Yuki | ![MCP · Community](assets/badges/tags-mcp-community.svg) |

## Consumer Daily Life

| Name | Description | Service | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [ah-mcp](https://github.com/mrserzhan/ah-mcp) | Lets an AI assistant browse Albert Heijn products, Bonus deals, cart, orders, lists, and receipts. | Albert Heijn | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [mcp-picnic](https://github.com/ivo-toby/mcp-picnic) | Lets an AI assistant search Picnic groceries and manage the cart, orders, and deliveries. | Picnic | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [SupermarktConnector](https://github.com/bartmachielsen/SupermarktConnector) | Lets a script or agent query Albert Heijn and Jumbo product and price data via their mobile APIs. | Albert Heijn / Jumbo | ![Script · Community](assets/badges/tags-script-community.svg) |

## Ecommerce Logistics

| Name | Description | Service | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [bol-mcp](https://github.com/BartWaardenburg/bol-mcp) | Lets an AI assistant call bol.com's Retailer API — 76 tools across orders, offers, and products. | bol.com | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [marktplaats-py](https://github.com/jensjeflensje/marktplaats-py) | Lets a script or agent search Marktplaats.nl listings and seller data. | Marktplaats | ![Script · Community](assets/badges/tags-script-community.svg) |
| [PostNL MCP](https://github.com/BartWaardenburg/postnl-mcp) | Lets an AI assistant create shipments and track PostNL parcels, barcodes, and pickup points. | PostNL | ![MCP · Community](assets/badges/tags-mcp-community.svg) |

## Government Public Data

| Name | Description | Service | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [cbsodata](https://github.com/J535D165/cbsodata) | Lets a script or agent query CBS (Statistics Netherlands) StatLine open data tables. | CBS StatLine | ![Script · Community](assets/badges/tags-script-community.svg) |
| [knmi-mcp](https://github.com/wolkwork/knmi-mcp) | Lets an AI assistant pull KNMI weather observations and forecasts. | KNMI | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [kvk-connect (MinBZK)](https://github.com/MinBZK/kvk-connect) | Lets an AI assistant query a ministry-run mirror of KVK company profiles, history, and search data. | KVK | ![MCP · Official](assets/badges/tags-mcp-official.svg) |
| [NeRDS (MinBZK)](https://github.com/MinBZK/NeRDS) | Fourteen Agent Skills covering Dutch government guidelines — accessibility, privacy, security, procurement, algorithms, and sustainability. | Rijksoverheid | ![Plugin · Official](assets/badges/tags-plugin-official.svg) |
| [nl-gov-mcp](https://github.com/WAINUTAI/nl-gov-mcp) | Lets an AI assistant reach 39 Dutch government data sources through one server — CBS, RDW, KNMI, PDOK, Rechtspraak, DUO, and more. | CBS StatLine / RDW / KNMI / Rechtspraak.nl | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [oorlogsbronnen-mcp](https://github.com/r-huijts/oorlogsbronnen-mcp) | Lets an AI assistant search Oorlogsbronnen's archive of 12 million Dutch WWII sources. | Oorlogsbronnen | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [openarchieven-mcp](https://github.com/coret/openarchieven-mcp-server) | Lets an AI assistant search Open Archieven genealogy records via a no-auth hosted endpoint. | Open Archieven | ![MCP · Official](assets/badges/tags-mcp-official.svg) |
| [OpenTK MCP](https://github.com/r-huijts/opentk-mcp) | Lets an AI assistant query Tweede Kamer (Dutch parliament) debates, motions, and documents. | Tweede Kamer | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [rdw-mcp](https://github.com/rantuma/rdw-mcp) | Lets an AI assistant query RDW vehicle-registration and open data — keyless, no credentials needed. | RDW | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [Rijksmuseum MCP](https://github.com/r-huijts/rijksmuseum-mcp) | Lets an AI assistant search and browse the Rijksmuseum's art collection. | Rijksmuseum | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [skills-standaarden](https://github.com/developer-overheid-nl/skills-standaarden) | Ten skills for Logius standards — API Design Rules, Digikoppeling, OAuth NL, and FSC — with Spectral and WCAG validation. | Logius | ![Plugin · Official · Concept](assets/badges/tags-plugin-official-concept.svg) |

## Housing Property

| Name | Description | Service | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [BAG_parser](https://github.com/digitaldutch/BAG_parser) | Converts the full Dutch address register (BAG) into a local, queryable SQLite database. | BAG (Kadaster/PDOK) | ![Script · Community](assets/badges/tags-script-community.svg) |
| [kadaster-mcp](https://github.com/jolietjakeblues/kadaster-mcp) | Lets an AI assistant query the Kadaster Knowledge Graph of Dutch land-registry data. | Kadaster | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [makelaar-mcp](https://github.com/spyrosavl/makelaar-mcp) | Lets an AI assistant search Funda listings and run NHG, NIBUD, mortgage, and closing-cost calculations. | Funda | ![MCP · Community](assets/badges/tags-mcp-community.svg) |
| [mcp-monumenten](https://github.com/woonstadrotterdam/mcp-monumenten) | Lets an AI assistant look up Dutch monument status from BAG, RCE, and municipal sources. | Monumenten | ![MCP · Community](assets/badges/tags-mcp-community.svg) |

## Legal Compliance

| Name | Description | Service | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [Belastingzaken skills](https://github.com/johnhout/knowledge-work-belastingzaken) | Eight commands and eight skills for Dutch income tax, BTW, VPB, payroll tax, deductions, and objections — no filing, professional review required. | Belastingdienst | ![Plugin · Community](assets/badges/tags-plugin-community.svg) |
| [BSN validator](https://github.com/Cuteminded/bsn-validator) | Validates and generates Dutch BSN (Burgerservicenummer) values. | BSN | ![Script · Community](assets/badges/tags-script-community.svg) |
| [dutch-energy-regulation-mcp](https://github.com/Ansvar-Systems/dutch-energy-regulation-mcp) | Lets an AI assistant search Dutch energy-regulation records from ACM, TenneT, RVO, and SodM. | Energieregulering (ACM/TenneT/RVO/SodM) | ![MCP · Commercial](assets/badges/tags-mcp-commercial.svg) |
| [Dutch-law MCP](https://github.com/Ansvar-Systems/Dutch-law-mcp) | Lets an AI assistant search wetten.overheid.nl statutes and provisions, with a paid gateway adding Rechtspraak rulings and Kamerstukken. | wetten.overheid.nl / Rechtspraak.nl | ![MCP · Commercial](assets/badges/tags-mcp-commercial.svg) |
| [FALCON / nl-ai-lawyer](https://github.com/FutureAtoms/FALCON-futureatoms-legal-counsel-of-netherlands) | Lets an AI assistant advise on Dutch law — employment/CAO, AVG, tax, real estate, and immigration — via 14 skills and 7 specialist agents. | wetten.overheid.nl / Rechtspraak.nl | ![Plugin · Community](assets/badges/tags-plugin-community.svg) |
| [legalize-nl](https://github.com/legalize-dev/legalize-nl) | Keeps the full, consolidated Dutch legislation as one Markdown file per law, updated on every real amendment. | wetten.overheid.nl | ![Script · Community](assets/badges/tags-script-community.svg) |
| [rechtspraak-js](https://github.com/cacfd3a/rechtspraak-js) | Sanitizes and normalizes Dutch court-judgment data from Rechtspraak.nl's official open-data feed. | Rechtspraak.nl | ![Script · Community](assets/badges/tags-script-community.svg) |

## Mobility Travel

| Name | Description | Service | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [NS MCP Server](https://github.com/r-huijts/ns-mcp-server) | Lets an AI assistant look up NS train departures, disruptions, and journey planning. | NS (Nederlandse Spoorwegen) | ![MCP · Community](assets/badges/tags-mcp-community.svg) |

## Work HR

| Name | Description | Service | Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|---|---|---|---|
| [Intelligence Group Giant MCP](https://intelligence-group.nl/nl/solutions/mcp/) | Lets an AI assistant analyse European (incl. Dutch) salary and recruitment-market data, read-only with per-user access control. | Intelligence Group | ![MCP · Commercial](assets/badges/tags-mcp-commercial.svg) |

---

_Curated — 40 listing(s) across 8 categories._

<!-- END CATALOGUE -->
