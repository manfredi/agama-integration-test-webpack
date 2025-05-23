// This is an example file for running Agama integration tests using Puppeteer.
// If the test fails it saves the page screenshot and the HTML page dump to
// ./log/ subdirectory. For more details about customization see the README.md
// file.

// see https://nodejs.org/docs/latest-v20.x/api/test.html

import { parse, commaSeparatedList } from "./lib/cmdline";
import { test_init } from "./lib/helpers";

import { logIn } from "./checks/login";
import { selectPatterns } from "./checks/software_selection";
import { performInstallation } from "./checks/installation";

// parse options from the command line
const options = parse((cmd) =>
  cmd
    .option("--patterns <pattern>...", "comma-separated list of patterns", commaSeparatedList)
    .option("--install", "Proceed to install the system (the default is not to install it)"),
);

test_init(options);
logIn(options.password);
if (options.patterns) selectPatterns(options.patterns);
if (options.install) performInstallation();
