# AI Integratie NL

> Dutch AI Agent Integrations Directory

A curated directory of **Dutch agent-integrations** — MCP servers, skills, plugins, and scripts that let an AI assistant use Dutch services.

Each listing shows, at a glance, whether it is official, commercial, or community, and how mature it is.

To add an integration, see [CONTRIBUTING.md](CONTRIBUTING.md). Only ever edit the JSON in `/data` — the catalogue below is generated from it by `scripts/generate.mjs`.

<!-- BEGIN CATALOGUE — generated from /data by scripts/generate.mjs. Do not edit between these markers; run `npm run generate`. -->

_Every listing is tagged with its type and origin; a status badge appears only when it is **not** live (beta, preview, concept, abandoned)._

## Accounting Finance

| Name | Description | Service | Tags |
|---|---|---|---|
| [bunq Partner MCP](https://github.com/bunq/partner-mcp) | Lets an AI assistant drive the bunq Partner API — onboarding, KYC, accounts, payments, cards, and compliance. | bunq | ![MCP](assets/badges/type-mcp.svg)&nbsp;![Official](assets/badges/origin-official.svg) |
| [Mollie MCP](https://docs.mollie.com/docs/mollie-mcp-server) | Lets an AI assistant manage Mollie payments, customers, invoices, subscriptions, balances, settlements, terminals, and webhooks. | Mollie | ![MCP](assets/badges/type-mcp.svg)&nbsp;![Official](assets/badges/origin-official.svg) |
| [Moneybird MCP](https://developer.moneybird.com/tools/mcp) | Lets an AI assistant manage Moneybird bookkeeping — invoices, contacts, and accounting data. | Moneybird | ![MCP](assets/badges/type-mcp.svg)&nbsp;![Official](assets/badges/origin-official.svg) |
| [Nmbrs AI Connector](https://www.nmbrs.com/ai-connector) | Lets an AI assistant perform Dutch payroll actions in Nmbrs, with confirmation-gated writes. | Nmbrs | ![MCP](assets/badges/type-mcp.svg)&nbsp;![Official](assets/badges/origin-official.svg)&nbsp;![Beta](assets/badges/status-beta.svg) |
| [Simplicate MCP](https://developer.simplicate.com/docs/mcp/getting_started/) | Lets an AI assistant work with Simplicate's project, CRM, and invoicing data via a per-domain hosted endpoint. | Simplicate | ![MCP](assets/badges/type-mcp.svg)&nbsp;![Official](assets/badges/origin-official.svg) |

## Consumer Daily Life

| Name | Description | Service | Tags |
|---|---|---|---|
| [ah-mcp](https://github.com/mrserzhan/ah-mcp) | Lets an AI assistant browse Albert Heijn products, Bonus deals, cart, orders, lists, and receipts. | Albert Heijn | ![MCP](assets/badges/type-mcp.svg)&nbsp;![Community](assets/badges/origin-community.svg) |
| [SupermarktConnector](https://github.com/bartmachielsen/SupermarktConnector) | Lets a script or agent query Albert Heijn and Jumbo product and price data via their mobile APIs. | Albert Heijn / Jumbo | ![Script](assets/badges/type-script.svg)&nbsp;![Community](assets/badges/origin-community.svg) |

## Ecommerce Logistics

| Name | Description | Service | Tags |
|---|---|---|---|
| [bol-mcp](https://github.com/BartWaardenburg/bol-mcp) | Lets an AI assistant call bol.com's Retailer API — 76 tools across orders, offers, and products. | bol.com | ![MCP](assets/badges/type-mcp.svg)&nbsp;![Community](assets/badges/origin-community.svg) |
| [marktplaats-py](https://github.com/jensjeflensje/marktplaats-py) | Lets a script or agent search Marktplaats.nl listings and seller data. | Marktplaats | ![Script](assets/badges/type-script.svg)&nbsp;![Community](assets/badges/origin-community.svg) |
| [PostNL MCP](https://github.com/BartWaardenburg/postnl-mcp) | Lets an AI assistant create shipments and track PostNL parcels, barcodes, and pickup points. | PostNL | ![MCP](assets/badges/type-mcp.svg)&nbsp;![Community](assets/badges/origin-community.svg) |

## Government Public Data

| Name | Description | Service | Tags |
|---|---|---|---|
| [cbsodata](https://github.com/J535D165/cbsodata) | Lets a script or agent query CBS (Statistics Netherlands) StatLine open data tables. | CBS StatLine | ![Script](assets/badges/type-script.svg)&nbsp;![Community](assets/badges/origin-community.svg) |
| [kvk-connect (MinBZK)](https://github.com/MinBZK/kvk-connect) | Lets an AI assistant query a ministry-run mirror of KVK company profiles, history, and search data. | KVK | ![MCP](assets/badges/type-mcp.svg)&nbsp;![Official](assets/badges/origin-official.svg) |
| [NeRDS (MinBZK)](https://github.com/MinBZK/NeRDS) | Fourteen Agent Skills covering Dutch government guidelines — accessibility, privacy, security, procurement, algorithms, and sustainability. | Rijksoverheid | ![Plugin](assets/badges/type-plugin.svg)&nbsp;![Official](assets/badges/origin-official.svg) |
| [OpenTK MCP](https://github.com/r-huijts/opentk-mcp) | Lets an AI assistant query Tweede Kamer (Dutch parliament) debates, motions, and documents. | Tweede Kamer | ![MCP](assets/badges/type-mcp.svg)&nbsp;![Community](assets/badges/origin-community.svg) |
| [Rijksmuseum MCP](https://github.com/r-huijts/rijksmuseum-mcp) | Lets an AI assistant search and browse the Rijksmuseum's art collection. | Rijksmuseum | ![MCP](assets/badges/type-mcp.svg)&nbsp;![Community](assets/badges/origin-community.svg) |

## Housing Property

| Name | Description | Service | Tags |
|---|---|---|---|
| [BAG_parser](https://github.com/digitaldutch/BAG_parser) | Converts the full Dutch address register (BAG) into a local, queryable SQLite database. | BAG (Kadaster/PDOK) | ![Script](assets/badges/type-script.svg)&nbsp;![Community](assets/badges/origin-community.svg) |

## Legal Compliance

| Name | Description | Service | Tags |
|---|---|---|---|
| [Belastingzaken skills](https://github.com/johnhout/knowledge-work-belastingzaken) | Eight commands and eight skills for Dutch income tax, BTW, VPB, payroll tax, deductions, and objections — no filing, professional review required. | Belastingdienst | ![Plugin](assets/badges/type-plugin.svg)&nbsp;![Community](assets/badges/origin-community.svg) |
| [BSN validator](https://github.com/Cuteminded/bsn-validator) | Validates and generates Dutch BSN (Burgerservicenummer) values. | BSN | ![Script](assets/badges/type-script.svg)&nbsp;![Community](assets/badges/origin-community.svg) |
| [Dutch-law MCP](https://github.com/Ansvar-Systems/Dutch-law-mcp) | Lets an AI assistant search wetten.overheid.nl statutes and provisions, with a paid gateway adding Rechtspraak rulings and Kamerstukken. | wetten.overheid.nl / Rechtspraak.nl | ![MCP](assets/badges/type-mcp.svg)&nbsp;![Commercial](assets/badges/origin-commercial.svg) |
| [legalize-nl](https://github.com/legalize-dev/legalize-nl) | Keeps the full, consolidated Dutch legislation as one Markdown file per law, updated on every real amendment. | wetten.overheid.nl | ![Script](assets/badges/type-script.svg)&nbsp;![Community](assets/badges/origin-community.svg) |
| [rechtspraak-js](https://github.com/cacfd3a/rechtspraak-js) | Sanitizes and normalizes Dutch court-judgment data from Rechtspraak.nl's official open-data feed. | Rechtspraak.nl | ![Script](assets/badges/type-script.svg)&nbsp;![Community](assets/badges/origin-community.svg) |

## Mobility Travel

| Name | Description | Service | Tags |
|---|---|---|---|
| [NS MCP Server](https://github.com/r-huijts/ns-mcp-server) | Lets an AI assistant look up NS train departures, disruptions, and journey planning. | NS (Nederlandse Spoorwegen) | ![MCP](assets/badges/type-mcp.svg)&nbsp;![Community](assets/badges/origin-community.svg) |

## Work HR

_No listings yet._

---

_Curated — 22 listing(s) across 8 categories._

<!-- END CATALOGUE -->
