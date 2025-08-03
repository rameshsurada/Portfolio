const Projects = () => (
  <section id="projects" className="py-12 px-4 bg-gray-100">
    <h2 className="text-2xl font-semibold text-center mb-6">Projects</h2>
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h3 className="text-xl font-bold">RemoveBG — Full-Stack SaaS App</h3>
        <ul className="list-disc ml-5 text-sm">
          <li>Removes image backgrounds using ClipDrop API</li>
          <li>Implemented Clerk for authentication</li>
          <li>Deployed on Vercel; responsive for desktop/mobile</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold">
          Amazon Pay Wallet to Cash (Wallet2Cash)
        </h3>
        <ul className="list-disc ml-5 text-sm">
          <li>Wallet transfer system mimicking Amazon Pay</li>
          <li>Link wallets, transfer balance, redeem via UPI</li>
          <li>Built with Node.js and MongoDB</li>
        </ul>
      </div>
    </div>
  </section>
);
export default Projects;
